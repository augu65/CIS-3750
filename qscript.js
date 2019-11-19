let curUser = null;
let qEntry = 
"<a href='#' class='list-group-item list-group-item-action'>"
+    "<div class='d-flex w-100 justify-content-between'>"
+    "<div>"
+        "<h6 class='qtext mb-1'></h6>"
+    "</div>"
+    "<div class='btn-group pull-right' role='group' aria-label='user-options'>"
+        "<button type='button' class='q-edit btn btn-outline-secondary'>Edit</button>"
+        "<button type='button' class='q-delete btn btn-outline-secondary'><img src='images/trash.svg'/></button>"
+    "</div>"
+ "</div>"
 + "</a>";

$('#listDiv').on('click', '.q-delete', function(e)
{
    curUser = $(this).closest('a');
    $('#deleteModal').modal();
});

$('#listDiv').on('click', '.q-edit', function(e)
{
    curUser = $(this).closest('a');
    $('#qEditInput').val(curUser.find('.qtext').text());
    $('#editModal').modal();
});

$('#deleteModalYesBtn').on('click', function(e){
    curUser.remove();
    $('#deleteModal').modal('hide');
});

$('#editModalBtn').on('click', function(e){
    curUser.find('.qtext').text($('#qEditInput').val());
    $('#editModal').modal('hide');
});

$('#create-btn').on('click', function(e)
{
    //$('#listDiv').append(qEntry);
    $('#createModal').modal();
});

$('#createModalBtn').on('click', function(e)
{
    $('#listDiv').append(qEntry);
    let tmpa = $('#listDiv a').last();

    tmpa.find('.qtext').text($('#qCreateInput').val());
    $('#qCreateInput').val("");
    $('#createModal').modal('hide');
});