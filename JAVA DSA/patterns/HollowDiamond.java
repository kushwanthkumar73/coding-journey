import java.util.Scanner;

class HollowDiamond {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the number of rows: ");
        int n = sc.nextInt();
        int mid = (2*n) -1;
        
        for (int row =1;row<=mid;row++){
            for(int col=1;col<=mid;col++){
                if(col == n-row+1|| col==n+row-1|| col==row-n+1|| col ==(3*n)-row-1){
                    System.out.print("*");
                }
                else{
                    System.out.print(" ");
                }
            }
            System.out.println();
        }
    }
}