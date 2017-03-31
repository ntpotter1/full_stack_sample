package spring;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;

@SpringBootApplication
@RestController
public class Application {

    @Autowired
    private PropertyRepository repository;

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping("/api/properties/{propertyId}")
    public PropertyEntity property(@PathVariable("propertyId") String propertyId) {
      PropertyEntity temp = repository.findOne(propertyId);
      System.out.println(temp.getFullAddress());
      
      return temp;
      // return "Java Spring Sample Response 2";
    }

    
    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping("/")
    public String home () {
       return "Java Spring Sample Response";
    }

    
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

}
