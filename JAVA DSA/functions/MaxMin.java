import java.util.Scanner;

class MaxMin {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter three numbers:");
        int a =sc.nextInt();
        int b = sc.nextInt();
        int c = sc.nextInt();
        findMax(a,b,c);
        findMin(a,b,c);
    }
    static void findMax(int a,int b,int c){
        int max =a;
        if(b>max)max =b;
        if(c>max)max = c;
        System.out.println(max);
    }
    static void findMin(int a,int b,int c){
        int min =a;
        if(b<min)min =b;
        if(c<min)min = c;
        System.out.println(min);
    }
}