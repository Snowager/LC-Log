package solutions;

import java.util.HashMap;

public class ArrayHashSolutions {

    /* Params: unsorted array nums, int target 
     * Return: 2 size int array of number pair that equals target 
     * 1
     * https://leetcode.com/problems/two-sum/description/*/
    public static int[] twoSum(int[] nums, int target) {
		final int[] twoNum = new int[2]; // fixed array with final values to optimize
		HashMap<Integer, Integer> numMap = new HashMap<Integer, Integer>(); // Hashmap for grouping
		for (int x = 0; x < nums.length; x++) {
			if (!numMap.containsKey(target - nums[x])) {
				numMap.put(nums[x], x); 
			} else {
				twoNum[1] = x;
				twoNum[0] = numMap.get(target - nums[x]);
			}
		}
		return twoNum;
	}

    /* Params: int array nums
     * Return: boolean value 
     * 287 
     * https://leetcode.com/problems/find-the-duplicate-number/description/ */
    public static boolean findDuplicate(int[] nums) { // --TODO-- refactor solution, add comments
		HashMap<Integer, Integer> numMap = new HashMap<Integer, Integer>();
		boolean even = false;
		int div = (int) Math.floor(nums.length / 2);
		if (nums.length % 2 == 0) {
			even = true;
		}
		for (int x = 0; x < div; x++) {
			if (!numMap.containsKey(nums[x])) {
				numMap.put(nums[x], x);
			} else {
				return true;
			}
			if (!numMap.containsKey(nums[nums.length - (x + 1)])) {
				numMap.put(nums[nums.length - (x + 1)], nums.length - (x + 1));
			} else {
				return true;
			}
		}
		if (!even) {
			if (!numMap.containsKey(nums[div])) {
				numMap.put(nums[div], div);
			} else {
				return true;
			}
		}
		return false;
	}

    /* Params: int array nums
     * Return: boolean value
     * 217
     * https://leetcode.com/problems/contains-duplicate/description/ */
    public static boolean containsDuplicate(int[] nums) {
        if (nums.length <= 1) return false; // duplicates require length of 2 or more
        HashMap<Integer, Integer> numMap = new HashMap<>();
        for (int x = 0; x < nums.length; x++) {
            if (!numMap.containsKey(nums[x])) { // If num doesn't exist yet, add
                numMap.put(nums[x], nums[x]);
            } else {
                return true; // If num does exist, we have a duplicate
            }
        }
        return false; // reaching here means no duplicates encountered
    }
}
