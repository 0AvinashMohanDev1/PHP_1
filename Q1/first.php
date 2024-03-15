
<?php 
function Palindrome($str){
    if ($str===strrev($str)) return 'true';
    return 'false';
}

echo Palindrome('malayalam');
?>