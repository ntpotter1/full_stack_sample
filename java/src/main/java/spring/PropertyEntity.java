package spring;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document(collection = "properties")
public class PropertyEntity {
    @org.springframework.data.annotation.Id
    private String id;

    @Field(value = "full_address")
    private String fullAddress;

    @Field(value = "year_built")
    private Long yearBuilt;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getFullAddress() {
		return fullAddress;
	}

	public void setFullAddress(String fullAddress) {
		this.fullAddress = fullAddress;
	}

	public Long getYearBuilt() {
		return yearBuilt;
	}

	public void setYearBuilt(Long yearBuilt) {
		this.yearBuilt = yearBuilt;
	}

}
