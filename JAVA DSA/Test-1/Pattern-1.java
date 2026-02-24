import java.util.Scanner;

class Pattern1 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter Your Number:");
        int n = sc.nextInt();
        for (int row =1;row<=n;row++){
            for(int col=1;col<=n+1;col++){
                if(col ==n+1){
                    System.out.print("|");
                }
                else if( col == n-row+1){
                    System.out.print("/");
                }
                else if(row==n && col>n-row+1){
                    System.out.print("_");
                }
                else{
                    System.out.print(" ");
                }
            }
            
            System.out.println();
        }
    
    }
}