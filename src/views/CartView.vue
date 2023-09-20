<style scoped>
table {
  width: 50%;
  border-collapse: collapse; /* Collapse borders to remove spacing between cells */
  padding: 8px; /* Add some padding for better readability */
}
fieldset {
  margin-right: 800px;
}

.quantity {
  width: 50px; /* Adjust the width as needed */
  text-align: left; /* Align text to the left */
}


form {
  margin-left: 80px;
  margin-top: 40px;

}
</style>

<script setup>

</script>

<template>
  <div>
    <img src="https://media.voog.com/0000/0048/2898/photos/porgand.png" height="200">
    </div>
  <div>
    <table class="table table-bordered"
           style="border:1px solid black;margin-left:auto;margin-right:auto">

      <thead>
      <tr class="table-active">
      </tr>
      </thead>
      <tbody>

      <tr>
        <th colspan="2" class="table-active">Müüja</th>
        <td colspan="2" class="table-active">Toode</td>
        <td colspan="2" class="table-active">Kogus</td>
        <td colspan="2" class="table-active">Hind</td>
        <td colspan="2" class="table-active">Vahesumma</td>
        <td colspan="2" class="table-active">Kustuta</td>

      </tr>

      <tr>
        <th colspan="2" class="table-active"><img src="getpicturedata"></th>
        <td colspan="2" class="table-active">"getkartulgala"</td>
        <td colspan="2" class="table-active"> <input class="quantity" id="id_form-0-quantity" min="0" name="form-0-quantity" value="1" type="number"></td>
        <td colspan="2" class="table-active">tuleb andmebaasist</td>
        <td colspan="2" class="table-active">hind x kogus</td>
        <td colspan="2" class="table-active"><font-awesome-icon :icon="['fas', 'trash-can']" /></td>

      </tr>

      </tbody>
    </table>
  </div>


  <component> <form>
  <fieldset class="row">
    <legend>Tarne:</legend>

      <div>
        <input type="radio" id="willgetitmyself" name="delivery" value="willgetitmyself" checked />
        <label for="willgetitmyself">Tulen ise järele 0,00 €</label>
      </div>

      <div>
        <input type="radio" id="getshipping" name="delivery" value="getshipping" />
        <label for="getshipping">Kuller 7,99 €</label>
      </div>
      </fieldset>
  </form>
</component>


  <div>
    <h4>Tarneaeg on reeglina 3 tööpäeva. </h4>
    <h4>Kokkuleppel müüjaga saab tarneaega muuta. </h4>
  </div>

  <div>
    <h4>Summa kokku</h4>
    <h11>Summa tuleb tuua kogus x hind</h11>
  </div>


    <component> <form>
      <fieldset class="row">
        <legend>Makseviis:</legend>

        <div>
          <input type="radio" id="banktransferSEB" name="paymentmethod" value="transfer" checked />
          <label for="banktransfer">SEB</label>
        </div>

        <div>
          <input type="radio" id="banktransferLUMINOR" name="paymentmethod" value="transfer" checked />
          <label for="banktransfer">LUMINOR</label>
        </div>

        <div>
          <input type="radio" id="banktransferSWEDBANK" name="paymentmethod" value="transfer" checked />
          <label for="banktransfer">SWEDBANK</label>
        </div>

        <div>
          <input type="radio" id="banktransferLHV" name="paymentmethod" value="transfer" checked />
          <label for="banktransfer">LHV</label>
        </div>

        <div>
          <input type="radio" id="paywithcash" name="paymentmethod" value="cash" />
          <label for="paywithcash">Tasun sularahas kauba kättesaamisel</label>
        </div>
      </fieldset>
    </form>
    </component>


</template>


