const options = {
  nodeSpacing: 150,
  nodeRadius: 10,
};

export const definition = `
gitGraph:
options
${JSON.stringify(options)}
end
commit
branch feature
checkout feature
commit
checkout master
commit
merge feature
`;
