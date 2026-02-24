import java.util.Scanner;

class GreatestNum {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter Four Numbers:");
        int a = sc.nextInt();
        int b = sc.nextInt();
        int c = sc.nextInt();
        int d = sc.nextInt();
        findGreatest(a,b,c,d);
    }
    static void findGreatest(int a,int b,int c,int d){
        int max = a;
        if(b>max)max = b;
        if(c>max)max = c;
        if(d>max)max = d;
        System.out.println(max);
    }
}