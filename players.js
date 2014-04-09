var game = function(player){
  function Go(i){
    if(i % 2 === 0) {
      return upOrDown(player.position);
    } else {
      return leftOrRight(player.position);
    }
  };

  for(i=1;i<10;i++) {
  if(player.position.toString() !== destroyer.position.toString()) { //arrays with identical contents are not identical unless you convert them to strings
    player.position = changer(player.position, Go(i));
    destroyer.position = changer(destroyer.position, moveRobot());
  } else {
    alert('You Loose!');
    break;
    }
  };
  if(i === 10) {alert('You Win!')}
};

var upOrDown = function(position) {
  if(position[0] !== 'btm' && position[0] !== 'top') {
    var x = prompt('Which is it, up or down?').toLowerCase();
    if(x === 'up') {return '0.1';} else {return '0.0';}
  } 
  else if (position[0] === 'btm') {
    alert('Only up from here!');
    return '0.1';
  } else {
    alert('Only down folks.');
    return '0.0';
  }
};

var leftOrRight = function(position) {
  if(position[1] !== 0 && position[1] !== 2) {
    var x = prompt('Which is it, left or right?').toLowerCase();
    if(x === 'left') {return '1.0'} else {return '1.1'}
  } else if (position[1] === 0) {
    alert('Only right from here!');
    return '1.1';
  } else {
    alert('Only left folks.');
    return '1.0';
  }
}

var changer = function(object, data) {
  var left = ['btm','mid','top'];
  var right = [0,1,2];
  var leftIndex = left.indexOf(object[0]);
  var rightIndex = right.indexOf(object[1]);
  var chunks = data.split('.');
  if(chunks[0] === '0') {
    if(chunks[1] === '1') {
      object[0] = left[leftIndex+1];
      return object;
    } else {
      object[0] = left[leftIndex-1];
      return object;
    }
  } else {
    if(chunks[1] === '1') {
      object[1] = right[rightIndex+1];
      return object;
    } else {
      object[1] = right[rightIndex-1];
      return object;
    }
  };
};

function robot (name) {
  this.name = name;
  this.position = ['top',0];
};

var forEach = function (array, fn) {
  for(i=0;i<array.length;i++) {
    fn(array[i], i);
  }
};

var destroyer = {
  name:'destroyer',
  position: ['btm',2]
};

var moveRobot = function(){
  var possible = [];
  if(destroyer.position[0] !== 'top') {
    possible.push('0.1');
  }
  if(destroyer.position[0] !== 'btm') {
    possible.push('0.0');
  }
  if(destroyer.position[1] !== 0) {
    possible.push('1.0');
  }
  if(destroyer.position[1] !== 2) {
    possible.push('1.1');
  } 
  return possible[Math.floor(Math.random()*possible.length)];
};

//go up is 1 and go right is 1
