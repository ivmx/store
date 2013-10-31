import org.junit.*;
import java.util.*;
import play.test.*;
import models.*;

public class BasicTest extends UnitTest {

    @Test
    public void aVeryImportantThingToTest() {
        new Producto("Producto", 10, Boolean.TRUE, 10.5).save();
    }

}
