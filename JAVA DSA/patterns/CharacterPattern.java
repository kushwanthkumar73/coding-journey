import java.util.Scanner;

class CharacterPattern {
    public static void main(String[] args) {
        Scanner sc= new Scanner(System.in);
        System.out.print("Enter the number of rows: ");
        int n = sc.nextInt();
        for(int i=1;i<=n;i++){
            int chars=i;
            for(int j=1;j<=chars;j++){
                System.out.print((char)(j+64)+" ");
            }
            System.out.println();
        }
    }
}