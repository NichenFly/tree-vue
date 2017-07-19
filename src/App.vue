<template>
  <div id="app" class="container">
    <a href="/">
      <img src="./assets/logo.png">
    </a>
    <router-view :member="orgnization"></router-view>
  </div>
</template>

<script>

var members = [
    { id: 1,
      parentId: 0,
      name: "1"
    },{
      id: 2,
      parentId: 1,
      name: "2"
    },{
      id: 3,
      parentId: 1,
      name: "3"
    },{
      id: 4,
      parentId: 2,
      name: "4"
    },{
       id: 5,
       parentId: 3,
       name: "5"
    },{
      id: 6,
      parentId: 3,
      name: "6"
    },{
      id: 7,
      parentId: 6,
      name: "7"
    }
];

var orgnization = {};

function addMembersToDepart(org, member){
    member.children = [];
    if(org.id === undefined){
        orgnization = member;
    }else {
        if(org.id === member.parentId){
            org.children.push(member);
        } else {
            org.children.forEach(function(child){
                addMembersToDepart(child, member);
            });
        }
    }
    
}
members.forEach(function(member){
  member.expanded = true;
    addMembersToDepart(orgnization, member);
});

export default {
  name: 'app',
  data () {
    return {
      orgnization: orgnization
    }
  }
}

/*
//love
var index = 0; 
var divs = {};
document.body.addEventListener('click',function(event){
  var x = event.x;
  var y = event.y;
  $('body').append('<div class="love glyphicon glyphicon-heart" id="div'+index+'" style="top: '+y+'px;left: '+x+'px"></div>');
  divs[index] = $('#div'+index).animate({
    opacity: '0',
    top: '-=100px'
  },'slow').hide('slow');
  index++;
});*/
</script>

<style>
.body {
  position: relative;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
.love {
  position:absolute;
  color: #e00;
  user-select: none;
  width: 30px;
  height: 30px;
  font-size: 30px;
}
</style>
