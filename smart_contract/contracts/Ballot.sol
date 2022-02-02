//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract Ballot {

    struct Voter {
        bytes32 name;
        bool voted;
        address candidate;
    }

    struct Candidate {
        bytes32 name;
        uint voteCount;
        bool voted;
    }

    


}
    
