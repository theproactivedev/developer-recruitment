# Welcome:
The pointhacks codebase is a combination of modern elegance with a sprinkling of old dust. The majority of work moving forward will be refactoring some CSS and markup issue with the following principles in mind:

## Principles:
- Minimal bundle size
- Ease of use across codebases - Vue/Wordpress. Right now we are using our styles in 2 codebases.
- Minimal warts - Get rid of any !important hacks or anti-patterns that can trip us up when working in the codebase.

What we want to see from you is your assessment of how we can achieve those principles. We have some ideas in the tasks below to get us started. Without refactoring the whole codebase. Do you have any input here?

## Tasks
__All tasks require:__ 
1. You to work within a unique branch `git checkout -b my-unique-branch-name`
2. Push any updates to your work associated with that task to this unique branch
3. Create a PR on this repo when done with the task
4. If you get stuck with anything or can't complete the task - Include this detail within the PR comment

Ask us for direction if any of this isn't clear

https://help.github.com/en/articles/creating-a-pull-request


### 1. Refactor base.scss (Simple)
Reduce selector size where possible by pulling out base components selector into the global namespace. .header, .quicklinks, .search in example. Ensure the styles aren't broken anywhere. And no collisions.
This can be achieved by removing unnecessary namespacing right up to html.

Body styles will still be required in some instances though.

#### So from:
```scss
html {
  body {
    .oranges {
      @include oranges;
    }

    .apples {
      @include apple;
    }


    .some-kebab-class {
      @include kebabs;
    }
  }
}
```

#### to:
```scss
.oranges {
  @include oranges;
}

.apples {
  @include apples;
}
```

### 2.) Very simple:
Refactor Media queries in `breakpoints.scss` to use relative units.

#### Some questions about this task - Once implemented
- How will you go about ensuring your change is working?
- Do you have a preference over units used in media queries? Explain why.

### 3. Harder task:
Fix the homepage markup with more semantic elements or any other inconsistencies.

#### Explain your reasoning here:
- Why is this part updated?
- What have you updated?
- What tools did you use to find issues here?
