import java.util.Scanner;
class VolumeOfCylinder {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        double r = sc.nextDouble();
        double h = sc.nextDouble();
        System.out.println(Math.PI * r * r * h);
    }
}
