import java.util.Scanner;

class StarsPattern2 {
    public static void main(String[] args) {
        Scanner sc= new Scanner(System.in);
        System.out.print("Enter the number of rows: ");
        int n = sc.nextInt();
        for(int i=1;i<=n;i++){
            int spaces = n-i;
            for(int j=1;j<=spaces;j++){
                System.out.print(" ");
            }
            int stars =i;
            for(int k=1;k<=stars;k++){
                System.out.print("*");
            }
            System.out.println();
        }
    }
}