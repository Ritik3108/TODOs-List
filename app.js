window.onload = () =>
{
  let button=document.querySelector('#b1');
  let textfield=document.querySelector('#tf');
  let form1=document.querySelector('#addForm');
  let res=document.querySelector('#result');

  editItem=null;


  form1.addEventListener('submit',addItem);
  res.addEventListener('click',removeItem);



}

function addItem(e)
{
  e.preventDefault();

  if(b1.value !='submit')
  {
    editItem.target.parentNode.childNodes[0].data=document.querySelector('#tf').value;
    b1.value='submit';
    document.querySelector('#tf').value='';

    document.querySelector('#lblSuccess').innerHTML="Text Edited Successfully";
    document.querySelector('#lblSuccess').style.display='block';
    setTimeout(function()
    {
      document.querySelector('#lblSuccess').style.display='none';
    },3000);

    return true;
  }


  let newItem=document.querySelector('#tf').value;

  if(newItem.trim() ==''|| newItem.trim() == null)
  {
    return false;
  }
  else{
    document.querySelector('#tf').value='';
  }

  let li=document.createElement('li');
  li.className='list-group-iten';

  let delButton=document.createElement('button');

  delButton.className="btn-danger btn btn-sm float-right delete";
  delButton.appendChild(document.createTextNode('Delete'));

  let editButton=document.createElement('button');
  editButton.className="btn-success btn btn-sm float-right edit";
  editButton.appendChild(document.createTextNode('Edit'));


  li.appendChild(document.createTextNode(newItem));
  li.appendChild(delButton);
  li.appendChild(editButton);

  result.appendChild(li);



}

function removeItem(e)
{
e.preventDefault();
if(e.target.classList.contains('delete'))
{
  if(confirm('Are you sure?'))
  {
    let li=e.target.parentNode;
    result.removeChild(li);

    document.querySelector('#lblSuccess').innerHTML="Text Deleted Successfully";
    document.querySelector('#lblSuccess').style.display='block';
    setTimeout(function()
    {
      document.querySelector('#lblSuccess').style.display='none';
    },3000);
  }
}

if(e.target.classList.contains('edit'))
{
  document.querySelector("#tf").value=e.target.parentNode.childNodes[0].data;
  b1.value='Edit';

  editItem=e;
}
}

function toggleButton(ref,btnId)
{
  console.log("Hello");
document.querySelector(`#${btnId}`).disabled=false;
}
