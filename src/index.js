


const onClickAdd = () =>{
//テキストボックスの値を入力し値をクリア
const inputText = document.getElementById("add-list").value;
document.getElementById('add-list').value = "";

createInCompleteList(inputText);
};


//未完了リストから指定の要素を削除
const deleteFromIncomplete = (target)=>{
  document.getElementById("imcomplete-list").removeChild(target);
}


//未完了リストに追加する関数
const createInCompleteList = (text)=>{
 
  //divを生成
  const div = document.createElement("div");
  div.className = "list-row";
  
  //liを生成
  const li = document.createElement("li");
  li.innerText = text;
  
  //button（完了タグ)作成
  const completebutton = document.createElement("button");
  completebutton.innerText = "完了"
  completebutton.addEventListener("click",()=>{
    
    //完了ボタンを押した時に完了リストから削除される処理
    deleteFromIncomplete(completebutton.parentNode);
    
    //完了リストに追加する要素
    const addTarget = completebutton.parentNode;
    
    //ToDoの内容テキストを取得
    const text = addTarget.firstElementChild.innerText;
    
    
    //div以下を初期化
    addTarget.textContent = null;
    
    //liタグを生成
    const li = document.createElement("li");
    li.innerText = text;
    
    //buttonタグ生成
    const backbutton = document.createElement("button");
    backbutton.innerText = "戻す";
    backbutton.addEventListener("click",() =>{
      
      //押された戻すボタンの親タグを(div)を完了リストから消去
      const deleteTarget = backbutton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);
      
      //テキスト取得
      const text = backbutton.parentNode.firstElementChild.innerText;
      createInCompleteList(text);
    });
    
    
    //divタグの子要素に各要素を設定
    addTarget.appendChild(li)
    addTarget.appendChild(backbutton);
    
    //完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });
  
  
  
  
  
  
  //button（削除タグ)作成
  const deletebutton = document.createElement("button");
  deletebutton.innerText = "削除"
  deletebutton.addEventListener("click",()=>{
    
    //押された削除ボタンの親タグ(div)を未完了リストから削除
    deleteFromIncomplete(deletebutton.parentNode);
  });
  
  
  //divタグのこ要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completebutton);
  div.appendChild(deletebutton);
  
  //未完了リストに追加
  document.getElementById("imcomplete-list").appendChild(div);
};
  



document
.getElementById("add-button")
.addEventListener("click", () => onClickAdd () );
