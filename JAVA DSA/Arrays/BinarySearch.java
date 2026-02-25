class BinarySearch {
    public static void main(String[] args) {
        int[] arr = {21,25,29,35,121,256,239,500,1000};
        int target = 121;
        int result = search(arr,target);
        System.out.println(result);
    }
    static int search(int[] arr,int target){
        int mid,low=0,high=arr.length;
        while(low<=high){
            mid = (high+low)/2;
            if(arr[mid]==target){
                return mid;
            } else if(arr[mid]<target){
                low = mid+1;
            } else if(arr[mid]>target){
                high=mid-1;
            }
        }
        return -1;
    }
}

