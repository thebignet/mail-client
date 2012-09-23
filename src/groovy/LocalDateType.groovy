import com.mongodb.BasicDBObject;
import com.mongodb.DBObject;
import org.grails.datastore.gorm.finders.MethodExpression.Between
import org.grails.datastore.mapping.engine.types.AbstractMappingAwareCustomTypeMarshaller;
import org.grails.datastore.mapping.model.PersistentProperty;
import org.grails.datastore.mapping.mongo.query.MongoQuery;
import org.grails.datastore.mapping.query.Query;
import org.joda.time.LocalDate
class LocalDateType extends AbstractMappingAwareCustomTypeMarshaller<LocalDate, DBObject, DBObject> {
	LocalDateType() {
		super(LocalDate)
	}
	@Override
	protected Object writeInternal(PersistentProperty property, String key, LocalDate value, DBObject nativeTarget) {
		final converted = value.localMillis
		nativeTarget.put(key, converted)
		return converted
	}

	@Override
	protected void queryInternal(PersistentProperty property, String key, Query.PropertyCriterion criterion, DBObject nativeQuery) {
		if(criterion instanceof Between) {
			def dbo = new BasicDBObject()
			dbo.put(MongoQuery.MONGO_GTE_OPERATOR, criterion.getFrom().localMillis);
			dbo.put(MongoQuery.MONGO_LTE_OPERATOR, criterion.getTo().localMillis);
			nativeQuery.put(key, dbo)
		}
		else {
			nativeQuery.put(key, criterion.value.localMillis)
		}

	}

	@Override
	protected LocalDate readInternal(PersistentProperty property, String key, DBObject nativeSource) {
		final num = nativeSource.get(key)
		if(num instanceof Long) {
			return new LocalDate(num)
		}
		return null
	}
}
