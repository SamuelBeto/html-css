

const total = function(A,B){
    var soma = 0;
    if(A < B){
      while(A <= B){
        soma += A;
        A++;
      }
      return soma
    }else{
      while(B <= A){
        soma += B;
        B++;
      }
      return soma
    }
  }
  
console.log(total(3,1))