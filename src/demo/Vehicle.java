package demo;

/**
 * Abstract base class representing a generic vehicle
 */
public abstract class Vehicle {
    private String brand;
    private String model;
    private int year;
    protected double price;
    private static int totalVehicles = 0;
    
    public Vehicle(String brand, String model, int year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        totalVehicles++;
    }
    
    public String getBrand() {
        return brand;
    }
    
    public void setBrand(String brand) {
        this.brand = brand;
    }
    
    public String getModel() {
        return model;
    }
    
    public void setModel(String model) {
        this.model = model;
    }
    
    public int getYear() {
        return year;
    }
    
    public void setYear(int year) {
        this.year = year;
    }
    
    public double getPrice() {
        return price;
    }
    
    public void setPrice(double price) {
        this.price = price;
    }
    
    public static int getTotalVehicles() {
        return totalVehicles;
    }
    
    public abstract void start();
    
    public abstract void stop();
    
    public String getInfo() {
        return year + " " + brand + " " + model;
    }
}
