function canJump(nums) {
  let dbPositions = new Array(nums.length).fill(false);
  dbPositions[0] = true;

  for (let j = 1; j < nums.length; j++) {
    for (let i = 0; i < j; i++) {
      if (dbPositions[i] && i + nums[i] >= j) {
        dbPositions[j] = true;
        break;
      }
    }
  }
  return dbPositions[dbPositions.length - 1];
}
