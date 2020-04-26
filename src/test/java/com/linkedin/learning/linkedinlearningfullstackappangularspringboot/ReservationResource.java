package com.linkedin.learning.linkedinlearningfullstackappangularspringboot;

import static org.junit.jupiter.api.Assertions.fail;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.test.context.junit4.SpringRunner;

import com.linkedin.learning.LinkedInLearningFullStackAppAngularSpringBootApplication;
import com.linkedin.learning.rest.ResourceConstants;

@RunWith(SpringRunner.class)
@SpringBootTest(classes=LinkedInLearningFullStackAppAngularSpringBootApplication.class,
webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class ReservationResource {

	@LocalServerPort
	private int port;
	
	
	@BeforeEach
	void setUp() throws Exception {
		//RestAssured.port =Integer.valueOf(port);
		//RestAssured.basePath =ResourceConstants.ROOM_RESERVATION_V1;
		//RestAssured.baseURI="http://locahost";
	}

	@Test
	void test() {
		fail("Not yet implemented");
		//given().when.get('/'+1).then()
		//.statusCode(200);
	}

}
