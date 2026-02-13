import java.util.Scanner;

class HollowPyramid {
    public static void main(String[] args) {
        Scanner sc= new Scanner(System.in);
        System.out.print("Enter the number of rows: ");
        int n = sc.nextInt();
        for(int i=1;i<=n;i++){
            int spaces = n-i;
            for(int j=1;j<=spaces;j++){
                System.out.print(" ");
            }
            int stars =2*i-1;
            for(int k=1;k<=stars;k++){
                if(i==n || k==1 || k==stars){
                    System.out.print("*");
                } else{
                    System.out.print(" ");
                }
            }
            System.out.println();
        }
    }
}
