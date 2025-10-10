package demo;

/**
 * Interface for objects that can be driven
 */
public interface Drivable {
    void accelerate(double speed);
    
    void brake();
    
    void turn(String direction);
    
    double getCurrentSpeed();
}
