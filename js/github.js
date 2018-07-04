class Github {
  constructor() {
    this.client_id = 'aa24ba96d93f8fb18cfd';
    this.client_secret = '39b4237923554edda8c89e6cf294f2dd351421f1';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }


  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos
    }
  }
}

