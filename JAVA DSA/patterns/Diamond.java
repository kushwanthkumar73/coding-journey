import java.util.Scanner;

class Diamond {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the number of rows: ");
        int n = sc.nextInt();
        int mid = (2*n) -1;
        for (int row =1;row<=n;row++){
            int spaces=n-row;
            for(int col=1;col<=spaces;col++){
                System.out.print(" ");
            }
            int stars=2*row-1;
            for(int k=1;k<=stars;k++){
                System.out.print("*");
            }
            System.out.println();
        }
        for (int row =n-1;row>=1;row--){
            int spaces=n-row;
            for(int col=1;col<=spaces;col++){
                System.out.print(" ");
            }
            int stars=2*row-1;
            for(int k=1;k<=stars;k++){
                System.out.print("*");
            }
            System.out.println();
        }
    }
}