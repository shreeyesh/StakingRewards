import { any } from "hardhat/internal/core/params/argumentTypes";

const { ethers} = require("hardhat");
StakingRewards : any

async function main() {
  const StakingRewards = await ethers.getContractFactory("StakingRewards");
  // const StakingRewards = await upgrades.deployProxy(StakingRewards, msg.sender, {
  //   initializer: "initialize",

  await StakingRewards.deployed();
  console.log("StakingRewards deployed to:", StakingRewards.address);
}

main();