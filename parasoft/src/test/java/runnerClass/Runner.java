package runnerClass;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions     (

		features = "src/test/resources/Features", 
		glue = "stepDefinitions",                   
		monochrome = true,                          
		dryRun = false,
	//	strict = false,
		plugin = { "html:target/cucumber-reports",	"json:target/cucumber.json" })
       // tags = {"@smoke"})
        //tags = {"@smoke , @regression" }) // it will run specific Future or Scenario with the
// mentioned tag.

public class Runner {

}











	
	
	
	
	
	
	
	
	
	

