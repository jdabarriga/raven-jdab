package demo;

/**
 * Motorcycle class extending Vehicle
 */
public class Motorcycle extends Vehicle implements Drivable {
    private boolean hasSidecar;
    private String motorcycleType;
    private double currentSpeed;
    private boolean engineRunning;
    
    public Motorcycle(String brand, String model, int year, String motorcycleType) {
        super(brand, model, year);
        this.motorcycleType = motorcycleType;
        this.hasSidecar = false;
        this.currentSpeed = 0.0;
        this.engineRunning = false;
    }
    
    @Override
    public void start() {
        engineRunning = true;
        System.out.println("Motorcycle engine started with a roar!");
    }
    
    @Override
    public void stop() {
        if (currentSpeed == 0) {
            engineRunning = false;
            System.out.println("Motorcycle engine stopped");
        }
    }
    
    @Override
    public void accelerate(double speed) {
        if (engineRunning) {
            currentSpeed += speed;
            System.out.println("Motorcycle accelerating to " + currentSpeed + " mph");
        }
    }
    
    @Override
    public void brake() {
        if (currentSpeed > 0) {
            currentSpeed -= 15;
            if (currentSpeed < 0) currentSpeed = 0;
        }
    }
    
    @Override
    public void turn(String direction) {
        System.out.println("Leaning " + direction);
    }
    
    @Override
    public double getCurrentSpeed() {
        return currentSpeed;
    }
    
    public void wheelie() {
        if (currentSpeed > 20) {
            System.out.println("Performing a wheelie!");
        }
    }
    
    public boolean isHasSidecar() {
        return hasSidecar;
    }
    
    public void setHasSidecar(boolean hasSidecar) {
        this.hasSidecar = hasSidecar;
    }
}
