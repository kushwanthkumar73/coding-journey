

public class LinearSearch {
    public static void main(String[] args) {
        int[] arr = {2,5,8,8,9,10};
        int target = 8;
        int ans = linearSearch(arr,target);
        System.out.println(ans);
    }
    static int linearSearch(int[] arr,int target){
        if(arr.length == 0){
            return -1;
        }
        for(int i=0;i<arr.length;i++){
            if(arr[i] == target){
                return i;
            }
        }
        return -1;
    }
}
