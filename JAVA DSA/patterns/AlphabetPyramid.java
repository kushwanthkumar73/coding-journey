import java.util.Scanner;

class AlphabetPyramid {
    public static void main(String[] args) {
        Scanner sc= new Scanner(System.in);
        System.out.print("Enter the number of rows: ");
        int n = sc.nextInt();
        for(int row=1;row<=n;row++){
            int spaces=n-row;
            for(int col=1;col<=spaces;col++){
                System.out.print(" ");
            }
            int chars=row;
            for(int col=1;col<=chars;col++){
                System.out.print((char)(col+64));
            }
            for(int col=row-1;col>=1;col--){
                System.out.print((char)(col+64));
            }
            System.out.println();
        }
    }
}