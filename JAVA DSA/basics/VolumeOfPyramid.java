import java.util.Scanner;
class VolumeOfPyramid {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        double baseArea = sc.nextDouble();
        double h = sc.nextDouble();
        System.out.println(baseArea * h / 3);
    }
}
