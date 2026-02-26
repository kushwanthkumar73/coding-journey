class ArrayPerumitation {
    public static void main(String[] args) {
        int[] arr={5,0,1,2,3,4};
        for(int i=0;i<arr.length;i++){
            int ans=arr[arr[i]];
            System.out.print(ans);
        }
    }
}