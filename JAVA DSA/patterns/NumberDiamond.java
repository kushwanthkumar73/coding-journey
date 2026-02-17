import java.util.Scanner;

class NumberDiamond {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the number of rows: ");
        int n = sc.nextInt();
        for (int row=1;row<=n;row++){
            int spaces = n-row;
            for(int col=1;col<=spaces;col++){
                System.out.print(" ");
            }
            for(int num=1;num<=row;num++){
                System.out.print(num);
            }
            for(int num=row-1;num>=1;num--){
                System.out.print(num);
            }
            System.out.println();
        }
        for (int row=n-1;row>=1;row--){
            int spaces = n-row;
            for(int col=1;col<=spaces;col++){
                System.out.print(" ");
            }
            for(int num=1;num<=row;num++){
                System.out.print(num);
            }
            for(int num=row-1;num>=1;num--){
                System.out.print(num);
            }
            System.out.println();
        }
    }
}