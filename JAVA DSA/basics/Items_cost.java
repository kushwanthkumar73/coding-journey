import java.util.Scanner;

public class Items_cost {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.print("Enter the cost of item 1: ");
        float item1 = sc.nextFloat();

        System.out.print("Enter the cost of item 2: ");
        float item2 = sc.nextFloat();

        System.out.print("Enter the cost of item 3: ");
        float item3 = sc.nextFloat();

        float total = item1 + item2 + item3;
        float gst = total * 0.18f;   // 18% GST
        float finalAmount = total + gst;

        System.out.println("Total cost (without GST): " + total);
        System.out.println("GST (18%): " + gst);
        System.out.println("Final amount (with GST): " + finalAmount);

        sc.close();
    }
}
