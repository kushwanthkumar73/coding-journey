import java.util.Scanner;

class FloydsTriangle {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the number of rows: ");
        int n = sc.nextInt();
        int currentNumber=1;
        for (int row=1;row<=n;row++){
            for(int col=1;col<=row;col++){
                System.out.print(currentNumber);
                currentNumber+=1;
            }
            System.out.println();
        }
        
    }
}