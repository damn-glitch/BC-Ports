// CargoChain/backend/contract.sol
pragma solidity ^0.8.0;

contract CargoContract {
    struct Cargo {
        string name;
        string description;
        string hsCode;
        uint quantity;
        uint weight;
        string origin;
        string destination;
        uint deadline;
        uint penalty;
        string hash;
    }

    mapping(address => Cargo) public cargos;

    function addCargo(
        string memory _name,
        string memory _description,
        string memory _hsCode,
        uint _quantity,
        uint _weight,
        string memory _origin,
        string memory _destination,
        uint _deadline,
        uint _penalty,
        string memory _hash
    ) public {
        Cargo memory newCargo = Cargo({
            name: _name,
            description: _description,
            hsCode: _hsCode,
            quantity: _quantity,
            weight: _weight,
            origin: _origin,
            destination: _destination,
            deadline: _deadline,
            penalty: _penalty,
            hash: _hash
        });

        cargos[msg.sender] = newCargo;
    }

    function getCargo(address _owner) public view returns (
        string memory name,
        string memory description,
        string memory hsCode,
        uint quantity,
        uint weight,
        string memory origin,
        string memory destination,
        uint deadline,
        uint penalty,
        string memory hash
    ) {
        Cargo memory c = cargos[_owner];
        return (
            c.name,
            c.description,
            c.hsCode,
            c.quantity,
            c.weight,
            c.origin,
            c.destination,
            c.deadline,
            c.penalty,
            c.hash
        );
    }
}
