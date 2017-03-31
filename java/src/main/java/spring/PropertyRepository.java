package spring;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface PropertyRepository extends MongoRepository<PropertyEntity, String> {
}
