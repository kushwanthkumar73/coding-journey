import java.util.Scanner;

class SwatikSymbol {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the number of rows: ");
        int n = sc.nextInt();
        int mid = (n/2) +1;
        for (int row =1;row<=n;row++){
            for(int col=1;col<=n;col++){
                if(row==mid || col==mid ||(row ==1 && col<mid) || (row==n && col>=mid)|| (col==n && row<mid) || (col==1 && row>mid)){
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
