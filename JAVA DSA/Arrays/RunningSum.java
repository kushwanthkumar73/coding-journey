class RunningSum {
    public static void main(String[] args) {
        int[] nums = {1,2,3,4};
        int[] sum = new int[nums.length];
        sum[0] = nums[0];
        for(int i =1;i<nums.length;i++){
            sum[i] = sum[i-1]+nums[i];
        }
        for(int i=0;i<nums.length;i++){
            System.out.print(sum[i]);
        }
    }
}
