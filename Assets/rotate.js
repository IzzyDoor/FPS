#pragma strict
var rotationSpeed : float;

function Update () {

gameObject.transform.Rotate(0,rotationSpeed*Time.deltaTime,0);

}