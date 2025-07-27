document.getElementById("searchBtn").addEventListener("click", () => {
    const username = document.getElementById("username").value.trim();//trim:文字列の前後の空白を取り除く
    const resultDiv = document.getElementById("result");
//ユーザー名が空白の場合の処理
    if (!username) {
        resultDiv.innerHTML = "<p>ユーザー名を入力してください。</p>";
        return;
    }
    fetch(`https://api.github.com/users/${username}`)
        .then(res => {
            if (!res.ok) throw new Error("ユーザーが見つかりませんでした。");
            return res.json();
        })
        .then(data => {
            resultDiv.innerHTML = `
        <p><strong>ユーザー名：</strong> ${data.login}</p>
        <p><strong>名前：</strong> ${data.name || "未設定"}</p>
        <p><strong>フォロワー数：</strong> ${data.followers}</p>
        <p><strong>公開リポジトリ数：</strong> ${data.public_repos}</p>
        <img src="${data.avatar_url}" width="100" alt="アイコン画像"/>
`;
        })
        .catch(err => {
            resultDiv.innerHTML = `<p style="color:red;">${err.message}</p>`
        });
})