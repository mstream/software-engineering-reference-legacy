export const definition = `
graph TD;
    subgraph C[Commit History]
        commit4(merge commit);
        commit3(modify file_one.txt);
        commit2(add file_two.txt);
        commit1(add file_one.txt);
    end
    
    subgraph R[References]
        master>master];
        feature>feature];
        head((HEAD));
    end
    
    subgraph T[Trees]
        tree1[file_one.txt];
        tree2[file_one.txt<br>file_two.txt];
        tree3[file_one.txt];
        tree4[file_one.txt<br>file_two.txt];
    end
    
    subgraph B[Blobs]
        blob1[content 1.0];
        blob2[content 2.0];
        blob3[content 1.1];
    end
    
    head --> master;
    
    feature ----> commit2;
    master ----> commit4;
    
    tree1 ----> blob1;
    tree2 ----> blob1;
    tree2 ----> blob2;
    tree3 ----> blob3;
    tree4 ----> blob2;
    tree4 ----> blob3;
    
    commit1 ----> tree1;
    commit2 ----> tree2;
    commit3 ----> tree3;
    commit4 ----> tree4;
    commit4 ----> commit3;
    commit4 ----> commit2;
    commit3 --> commit2;
    commit2 --> commit1;

    linkStyle 0 color:#000
    linkStyle 1 stroke:#80f
    linkStyle 2 stroke:#80f
    linkStyle 3 stroke:#80f
    linkStyle 4 stroke:#80f
    linkStyle 5 stroke:#80f
    linkStyle 6 stroke:#80f
    linkStyle 7 stroke:#80f
    linkStyle 8 stroke:#80f
    linkStyle 9 stroke:#80f
    linkStyle 10 stroke:#80f
    linkStyle 11 stroke:#80f
    linkStyle 12 stroke:#80f
    linkStyle 13 color:#000
    linkStyle 14 color:#000
    linkStyle 15 color:#000
    linkStyle 16 color:#000
`;
