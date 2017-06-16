export const tpl: string= `
<div class="row">
    <div class="col-xs-4">
        <button class="btn btn-info btn-sm" routerLink="/user/">Create a New User</button>
    </div>
</div>
<div class="row">
    <div class="col-xs-12">
        <br />
    </div>
</div>
<div class="row">
    <div class="col-xs-12">
        <table class="table table-bordered table-hover">
            <thead>
                <tr>
                    <th (click)="sort('id')">
                        ID
                        <i *ngIf="sortCol == 'id'" class="fa" [ngClass]="{'fa-sort-asc': (sortDir == 'asc'), 'fa-sort-desc': (sortDir == 'desc')}" aria-hidden="true"></i>
                    </th>
                    <th (click)="sort('name')">
                        User Name
                        <i *ngIf="sortCol == 'name'" class="fa" [ngClass]="{'fa-sort-asc': (sortDir == 'asc'), 'fa-sort-desc': (sortDir == 'desc')}" aria-hidden="true"></i>
                    </th>
                    <th (click)="sort('role')">
                        Role
                        <i *ngIf="sortCol == 'role'" class="fa" [ngClass]="{'fa-sort-asc': (sortDir == 'asc'), 'fa-sort-desc': (sortDir == 'desc')}" aria-hidden="true"></i>
                    </th>
                    <th (click)="sort('last_login')">
                        Last Login
                        <i *ngIf="sortCol == 'last_login'" class="fa" [ngClass]="{'fa-sort-asc': (sortDir == 'asc'), 'fa-sort-desc': (sortDir == 'desc')}" aria-hidden="true"></i>
                    </th>
                    <th (click)="sort('created_at')">
                        Joined
                        <i *ngIf="sortCol == 'created_at'" class="fa" [ngClass]="{'fa-sort-asc': (sortDir == 'asc'), 'fa-sort-desc': (sortDir == 'desc')}" aria-hidden="true"></i>
                    </th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>

            <tbody *ngIf="wait">
                <tr>
                    <td colspan="7" align="center">
                        <i class="fa fa-refresh fa-spin fa-2x fa-fw"></i>
                    </td>
                </tr>
            </tbody>

            <tbody *ngIf="!wait && error">
                <tr>
                    <td colspan="7" align="center">
                        <alert type="warning">{{ error }}</alert>
                    </td>
                </tr>
            </tbody>

            <tbody *ngIf="!wait && !error && users && users.length < 1">
                <tr>
                    <td colspan="7" align="center">
                        <alert type="warning">Sorry, no users were found. Please try again.</alert>
                    </td>
                </tr>
            </tbody>

            <tbody *ngIf="!wait && !error && users && users.length > 0">
                <tr class="user_row" *ngFor="let user of users; let index = index">
                    <th class="user_id" scope="row">{{ user.id }}</th>
                    <td class="user_name">{{ user.name }}</td>
                    <td class="user_role_name">{{ user.role.name }}</td>
                    <td class="user_last_login">{{ user.last_login }}</td>
                    <td class="user_joined">{{ user.joined }}</td>
                    <td class="user_edit"><a routerLink="/user/{{ user.id }}">Edit</a></td>
                    <td class="user_delete"><button type="button" class="btn btn-danger" (click)="clickDelete(user.id)">Delete</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
<div class="row paging" *ngIf="total">
    <div class="col-xs-4">

        <nav aria-label="Page navigation">
          <ul class="pagination pagination-md">

            <li *ngIf="(currentPage > 1)">
              <a (click)="clickPrev()" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>

            <li
                *ngFor="let page of pages; let index = index"
                 [ngClass]="{'active': (page == currentPage)}"
                 [attr.id]="'page'+(index + 1)"
                >
                <a (click)="clickPage(page)">{{ page }}</a>
            </li>

            <li *ngIf="(currentPage < getPageCount())">
              <a (click)="clickNext()" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>

          </ul>
        </nav>

    </div>
</div>

<div bsModal #confirmDeleteModal="bs-modal" class="modal" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-sm">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title pull-left">Delete?</h4>
        <button type="button" class="close pull-right" aria-label="Close" (click)="cancelDelete()">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="row">
            <div class="col-xs-12">
                <p>Are you sure you want to delete this user?</p>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-6">
                <button type="button" class="btn btn-warning" (click)="cancelDelete()">Cancel</button>
            </div>
            <div class="col-xs-6">
                <button type="button" class="btn btn-danger" (click)="confirmDelete(selectedUser)">Confirm</button>
            </div>
        </div>
      </div>
    </div>
  </div>
</div>
`;
