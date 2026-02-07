import java.util.Scanner;
class CurvedSurfaceAreaOfCylinder {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        double r = sc.nextDouble();
        double h = sc.nextDouble();
        System.out.println(2 * 3.14 * r * h);
    }
}
