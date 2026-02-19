import java.util.Scanner;

class AreaOfCircle {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        double r = sc.nextDouble();
        double Area=areaOfCircle(r);
        double Circum=circumferce(r);
        System.out.println(Area);
        System.out.println(Circum);
    }
    static double areaOfCircle(double radius){
        return (3.14*radius*radius);
    }
    static double circumferce(double radius){
        return (2*3.14*radius);
    }
}