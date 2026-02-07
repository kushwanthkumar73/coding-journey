import java.util.Scanner;
class VolumeOfCone {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        double r = sc.nextDouble();
        double h = sc.nextDouble();
        System.out.println((Math.PI * r * r * h) / 3);
    }
}
