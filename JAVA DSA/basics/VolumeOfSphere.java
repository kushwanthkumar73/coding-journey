import java.util.Scanner;
class VolumeOfSphere {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        double r = sc.nextDouble();
        System.out.println((4.0 / 3) * 3.14 * r * r * r);
    }
}
